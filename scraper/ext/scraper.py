from scrapables.covidamd_com import CovidAmdCom
from scrapables.covidaps_com import CovidApsCom
from scrapables.covidbaroda_com import CovidBarodaCom
from scrapables.covidbedthane_in import CovidBedThaneIn
from scrapables.covidbeed_com import CovidBeedCom
from scrapables.covidbengaluru_com import CovidBengaluruCom
from scrapables.coviddelhi_com import CovidDelhiCom
from scrapables.covidgandhinagar_com import CovidGandhiNagarCom
from scrapables.covidmp_com import CovidMPCom
from scrapables.covidnashik_com import CovidNashikCom
from scrapables.covidpune_com import CovidPuneCom
from scrapables.covidtelangana_com import CovidTelanganaCom
from scrapables.covidtnadu_com import CovidTNaduCom
from scrapables.covidwb_com import CovidWBCom

scrapables = [
  { 'scrapable': CovidAmdCom,         'save_path': 'data/amd.csv' },
  { 'scrapable': CovidApsCom,         'save_path': 'data/aps.csv' },
  { 'scrapable': CovidBarodaCom,      'save_path': 'data/baroda.csv' },
  { 'scrapable': CovidBedThaneIn,     'save_path': 'data/thane.csv' },
  { 'scrapable': CovidBeedCom,        'save_path': 'data/beed.csv' },
  { 'scrapable': CovidBengaluruCom,   'save_path': 'data/bengaluru.csv' },
  { 'scrapable': CovidDelhiCom,       'save_path': 'data/delhi.csv' },
  { 'scrapable': CovidGandhiNagarCom, 'save_path': 'data/gandhi_nagar.csv' },
  { 'scrapable': CovidMPCom,          'save_path': 'data/mp.csv' },
  { 'scrapable': CovidNashikCom,      'save_path': 'data/nashik.csv' },
  { 'scrapable': CovidPuneCom,        'save_path': 'data/pune.csv' },
  { 'scrapable': CovidTelanganaCom,   'save_path': 'data/telangana.csv' },
  { 'scrapable': CovidTNaduCom,       'save_path': 'data/tnadu.csv' },
  { 'scrapable': CovidWBCom,          'save_path': 'data/wb.csv' },
]


for s in scrapables:
  print('Saving ', s['save_path'])
  data = s['scrapable']()
  data.save(s['save_path'])
