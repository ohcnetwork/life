from scrapable import Scrapable
from bs4 import BeautifulSoup

class CoronaHaryanaIn(Scrapable):
  url = 'https://coronaharyana.in/'

  def get_json(self):
    import requests
    response = requests.get(self.url)
    response = self.to_json(response)
    keys = set([key for x in response.json() for key in x.keys()])
    data = { col: list() for col in keys }
    for record in response.json():
      for key in keys:
        if key not in record.keys():
          record[key]=None
        data[key].append(record[key])
    return data

  def to_json(self, response):
    soup = BeautifulSoup(response.content, 'html.parser')
    res = soup.find(id='containner0-tab')
    divs = res.find_all('div', class_='psahuDiv community-post wow fadeInUp')
    for div in divs:
      div = div.div.div
      print('---------------------')
      print(div.text)
    return {}

if __name__=='__main__':
  data = CoronaHaryanaIn()
  data.save('delhi.csv')
