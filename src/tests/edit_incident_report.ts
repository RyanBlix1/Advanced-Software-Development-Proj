import assert from 'assert';

declare global {
  interface Console {
    success(message: string): void;
  }
}

console.success = (message: string) => {console.log("\x1b[32m%s\x1b[0m", message)}

(async () => {
  console.log('Incident Report Viewing')
  const response = await fetch("http://localhost:3000/api/incident/3")
  const data = await response.text()

  let body;
  try{
    body = JSON.parse(data)
  }catch(e){
    assert(false, data)
  }
  assert.strictEqual(body.id, 3, 'Incorrect ID given')
  console.success('Correct ID given')
  assert.strictEqual(body.time, '17:52', 'Incorrect time given')
  console.success('Correct time given')
  console.success('Successfully viewed incident report')

  console.log('Edit Incident Report')
  const response2 = await fetch("http://localhost:3000/api/incident/1", {
    "body": JSON.stringify({
      id: 3,
      details: 'Incident 3: A person had an accident at the location.',
      date: '25/09/2024',
      time: '17:52',
      location: 'Level 9, Ward 4, Room 18',
      victimId: '58848837',
      witnessId: '54942856',
      offenderId: '99494253',
      urgency: 'Medium',
      impact: 'Low',
      riskAssessment: 'Low'
    }),
    "method": "PUT"
  })
  const data2 = await response2.text()
  assert.strictEqual(data2, 'Incident with ID 1 updated', 'Failed to edit incident report')
  console.success('Incident successfully edited')

  console.log('Incident Report Creation')
  await fetch("http://localhost:3000/api/incident", {
    "headers": { "Content-Type": "application/x-www-form-urlencoded" },
    "body": "details=Worker+fell+and+died&date=2023-07-12&time=18%3A25&location=Level+3%2C+Ward+3%2C+Room+22&victimId=92345782&witnessId=23457697&offenderId=98374583&urgency=High&impact=High&riskAssessment=High",
    "method": "POST"
  });
  
  const response4 = await fetch("http://localhost:3000/api/incident")
  const data4 = await response4.text()
  let body4;
  try{
    body4 = JSON.parse(data4)
  }catch(e){
    assert(false, data4)
  }
  const mostRecentIncident = body4[Object.keys(body4).length - 1]

  assert.strictEqual(mostRecentIncident.details, 'Worker fell and died', 'Failed to create incident report')
  console.success('Successfully created incident report')

  console.log('Risk Assessment Matrix')
  assert.strictEqual(mostRecentIncident.riskAssessment, 'High', 'Wrong risk calculated')
  console.success('Successfully calculated risk')

  console.log('Delete Incident report')
  const response5 = await fetch(`http://localhost:3000/api/incident/${mostRecentIncident.id}`, {
    "method": "DELETE"
  });
  
  const response6 = await fetch("http://localhost:3000/api/incident")
  const data6 = await response6.text()
  let body6;
  try{
    body6 = JSON.parse(data6)
  }catch(e){
    assert(false, data6)
  }
  assert.strictEqual(Object.keys(body4).length - 1, Object.keys(body6).length, 'Failed to delete incident report')
  console.success('Successfully deleted incident report')

  console.log('Warning Management')
  const response7 = await fetch("http://localhost:3000/api/warning")
  const data7 = await response7.text()
  let body7;
  try{
    body7 = JSON.parse(data7)
  }catch(e){
    assert(false, data7)
  }
  assert(Object.keys(body7).length > 0, 'No warnings in system')
  console.success('Successfully found warnings')
  
  // Offender Details Recording	
  // Offender Viewing	

  // User Access Control
  // Incident Allocation
})();
