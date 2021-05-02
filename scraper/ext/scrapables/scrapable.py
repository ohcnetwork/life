import pandas as pd

class Scrapable:
  def get_json(self):
    pass

  def save(self, filename):
    df = pd.DataFrame(self.get_json())
    df.index.name = 'id'
    df.to_csv(filename)
