import faker from "faker";


export const  generateData = (lineLength, createTableDetailed) => {
  console.log(lineLength)
  let tableList = {}
  let columnList = {}

  // create table list and column  list
  Object.keys(createTableDetailed).map((table, index) => (
    createTableDetailed[table].createFlg
      ? columnList[table] = createTableDetailed[table].column
      : null,
    createTableDetailed[table].createFlg
      ? tableList[table] = []
      : null
  ))

  let dataLine = {}
  // generate data
  for(let table in columnList) {
    for(let i = 0; i < lineLength; i++) {
      for(let column in columnList[table]) {
        if(columnList[table][column] === false) {
          continue
        }

        dataLine[column] = switchCreateData(column)
      }
      tableList[table].push(dataLine)
      dataLine = {}
    }
  }

  return tableList;
}


export const switchCreateData = (columnName) => {
  switch (columnName) {
  // User table columns
  case "userId":
    return faker.random.uuid()
  case "fullName":
    return faker.name.firstName() + " " + faker.name.lastName()
  case "loginId":
    return faker.internet.userName()
  case "password":
    return faker.internet.password()
  case "avatarURL":
    return faker.internet.avatar()
  case "email":
    return faker.internet.email()
  case "phoneNumber":
    return faker.phone.phoneNumberFormat()
  case "streetAddress":
    return faker.address.streetAddress()
  case "companyName":
    return faker.company.companyName()
  // Post table columns
  case "postId":
    return faker.random.uuid()
  case "sentence":
    return faker.lorem.sentence()
  case "slug":
    return faker.lorem.slug()
  case "paragraph":
    return faker.lorem.paragraph()
  case "text":
    return faker.lorem.text()
  default:
    return null
  }
}