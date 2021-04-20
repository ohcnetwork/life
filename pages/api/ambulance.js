const ambulanceData = [
  {
    state: 'Andhra Pradesh',
    city: 'Vishaka',
    name: "Prakash Ambulance",
    phoneNo1: 90909090909,
    address: 'Hello World',
  },
  {
    state: 'Andhra Pradesh',
    city: 'Vishaka',
    name: "Prakash Ambulance",
    phoneNo1: 90909090909,
    address: 'Hello World',
  },
  {
    state: 'Andhra Pradesh',
    city: 'Vishaka',
    name: "Prakash Ambulance",
    phoneNo1: 90909090909,
    address: 'Hello World',
  },
  {
    state: 'Andhra Pradesh',
    city: 'Vishaka',
    name: "Prakash Ambulance",
    phoneNo1: 90909090909,
    address: 'Hello World',
  },
  {
    state: 'Andhra Pradesh',
    city: 'Vishaka',
    name: "Prakash Ambulance",
    phoneNo1: 90909090909,
    address: 'Hello World',
  },
  {
    state: 'Andhra Pradesh',
    city: 'Vishaka',
    name: "Prakash Ambulance",
    phoneNo1: 90909090909,
    address: 'Hello World',
  },
];

export default function handler(req, res) {
  res.status(200).json(ambulanceData);
}
