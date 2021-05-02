from .scrapable import Scrapable

class CovidAmdCom(Scrapable):
  hospital = 'https://covidamd.com/data/covidamd.com/bed_data.json'
  plasma = 'https://covidamd.com/data/covidamd.com/plasma_data.json'

  def get_json(self):
    import requests
    response = requests.get(self.hospital)
    keys = set([key for x in response.json() for key in x.keys()])
    data = { col: list() for col in keys }
    for record in response.json():
      for key in keys:
        if key not in record.keys():
          record[key]=None
        data[key].append(record[key])
    return data


if __name__=='__main__':
  data = CovidAmdCom()
  data.save('delhi.csv')
