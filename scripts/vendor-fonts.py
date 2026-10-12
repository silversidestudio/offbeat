from pathlib import Path
from urllib.request import urlopen, Request
import re
font_url='https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=DM+Sans:wght@400;500;600;700&family=Libre+Caslon+Display&display=swap'
request=Request(font_url,headers={'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'})
stylesheet=urlopen(request).read().decode()
root=Path('assets/fonts')
(root/'fonts.css').write_text('')
downloaded={}
for block in re.findall(r'@font-face\s*\{.*?\}',stylesheet,re.S):
    if 'U+0000-00FF' not in block: continue
    family=re.search(r"font-family: '([^']+)'",block)[1]
    weight=re.search(r'font-weight: (\d+)',block)[1]
    url=re.search(r'url\(([^)]+)\)',block)[1]
    name=family.lower().replace(' ','-')+'-'+weight
    if url in downloaded: name=downloaded[url]
    else:
        (root/(name+'.woff2')).write_bytes(urlopen(url).read())
        downloaded[url]=name
    block=block.replace(url,name+'.woff2')
    with (root/'fonts.css').open('a') as f:f.write(block+'\n')
for family in ('barlowcondensed','dmsans','librecaslondisplay'):
    license=urlopen('https://raw.githubusercontent.com/google/fonts/main/ofl/'+family+'/OFL.txt').read()
    (root/(family+'-OFL.txt')).write_bytes(license)
print('Self-hosted font bundle and three OFL licences.')
