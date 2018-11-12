
const url = 'http://www.123fakewebaddress.kiwi/';

function gtRgstrdUsrs(fields, include, fromDate, toDate) {
  return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: {
        fullName: fields[0] + fields[1],
        email: fields[2],
        toDate: Date.toString(toDate),
        fromDate: Date.toString(fromDate),
      }
    })
    .then(response => response.json());
}
gtRgstrdUsrs(['firstName', 'lastName', 'email'], ['invitedUsers'], '2016-09-26', '2016-12-13')
