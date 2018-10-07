const hoge = {



  createTableDetailed: [
    {
      // ユーザ一覧
      users: {
        createFlg: false,
        lineLength: 1,
        column: {
          userId: false,            // random.uuid
          fullName: false,          // name.firstName
          firstName: false,         // name.lastName
          lastName: false,          // firstName + " " + lastName
          loginId: false,           // internet.userName
          password: false,          // internet.password
          avatarURL: false,         // internet.avatar
          email: false,             // internet.email
          phoneNumber: false,       // phone.phoneNumberFormat
          streetAddress: false,     // address.streetAddress
          companyName: false,       // company.compayName
        }
      },
      // 投稿
      posts: {
        createFlg: false,
        lineLength: 1,
        column: {
          userId: false,            // random.uuid(usersの)
          postId: false,            // random.uuid
          sentence: false,          // lorem.sentence
          slug: false,              // lorem.slug
          paragraph: false,         // lorem.paragraph
          text: false,              // lorem.text
        }
      }
    }
  ]



};
