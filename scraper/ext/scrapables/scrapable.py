import pandas as pd

class Scrapable:
  '''
  For each source, define its corresponding class and inherit this class.
  You should define `get_json` method inside inherit class for getting data json
  from that source. Also if there is a need to change column names, define it in `column_map`
  inside your inherit class. If column map for only some columns are defined, other column
  will automatically droped
  '''
  column_map = dict()
  def get_json(self):
    pass

  def save(self, filename):
    df = pd.DataFrame(self.get_json())
    if len(self.column_map.keys())!=0:
      df.rename(columns=self.column_map, inplace=True)
      uncommon_cols = list(set(df.columns)-set(self.column_map.values()))
      df.drop(uncommon_cols, axis='columns', inplace=True)
    df.index.name = 'id'
    df.to_csv(filename)
