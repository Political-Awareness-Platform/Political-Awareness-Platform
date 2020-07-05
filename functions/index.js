const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()

exports.commentLikeIncrementer = functions.https.onCall((data, context) => {
  // checking if the user is authenticated and if not authenticated show this error
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'Only authenticated users can add comment'
    )
  }

  // checking comment type and only accept 'positiveComments' || 'negativeComments'
  if (data.commentType === 'positiveComments' || data.commentType === 'negativeComments') {
    // checking if the user already liked the comment, if haven't yet it increments comment like account.
    return admin
      .firestore()
      .collection(data.commentCountry)
      .doc(data.commentPartyDBCode)
      .collection(data.commentType)
      .doc(data.commentID)
      .get()
      .then(doc => {
        if (doc.data().likedBy.includes(context.auth.uid)) {
          throw new functions.https.HttpsError(
            'already-exists',
            'You already liked it'
          )
          console.info("User Already Liked the Comment")
        } else {
          admin
            .firestore()
            .collection(data.commentCountry)
            .doc(data.commentPartyDBCode)
            .collection(data.commentType)
            .doc(data.commentID)
            .update({
              like: admin.firestore.FieldValue.increment(1),
              likedBy: admin.firestore.FieldValue.arrayUnion(context.auth.uid)
            })
            console.info(`${data.commentID} comment has been 👍`)
        }
      })
  } else {
    functions.logger.error("commentType is incorrect❗️")
  }
})

// https callable functions
// exports.sayHello = functions.https.onCall((data,context) => {
//     const name = data.name;
//     return `hello, ${name}`
// })


// // https callable function (adding a request)
// exports.likeapositivecomment = functions.https.onCall((data, context) => {
//   // checking if the user is authenticated and if not authenticated show this error
//   if (!context.auth) {
//     throw new functions.https.HttpsError(
//       'unauthenticated',
//       'Only authenticated users can add request'
//     )
//   }
//   // checking if the user already liked the comment
//   return admin
//     .firestore()
//     .collection(data.commentCountry)
//     .doc(data.commentPartyDBCode)
//     .collection('positiveComments')
//     .doc(data.commentID)
//     .get()
//     .then(doc => {
//       if (doc.data().likedBy.includes(context.auth.uid)) {
//         throw new functions.https.HttpsError(
//           'invalid-argument',
//           'You already liked it'
//         )
//       } else {
//         admin
//           .firestore()
//           .collection(data.commentCountry)
//           .doc(data.commentPartyDBCode)
//           .collection('positiveComments')
//           .doc(data.commentID)
//           .update({
//             like: admin.firestore.FieldValue.increment(1),
//             likedBy: admin.firestore.FieldValue.arrayUnion(context.auth.uid)
//           })
//       }
//     })
// })

// exports.likeanegativecomment = functions.https.onCall((data, context) => {
//   // checking if the user is authenticated and if not authenticated show this error
//   if (!context.auth) {
//     throw new functions.https.HttpsError(
//       'unauthenticated',
//       'Only authenticated users can add request'
//     )
//   }
//   // checking if the user already liked the comment
//   return admin
//     .firestore()
//     .collection(data.commentCountry)
//     .doc(data.commentPartyDBCode)
//     .collection('negativeComments')
//     .doc(data.commentID)
//     .get()
//     .then(doc => {
//       if (doc.data().likedBy.includes(context.auth.uid)) {
//         throw new functions.https.HttpsError(
//           'already-exists',
//           'You already liked it'
//         )
//       } else {
//         admin
//           .firestore()
//           .collection(data.commentCountry)
//           .doc(data.commentPartyDBCode)
//           .collection('negativeComments')
//           .doc(data.commentID)
//           .update({
//             like: admin.firestore.FieldValue.increment(1),
//             likedBy: admin.firestore.FieldValue.arrayUnion(context.auth.uid)
//           })
//       }
//     })
// })


// auth trigger (new user signup)
// exports.newUserSignup = functions.auth.user().onCreate(user => {
//   // console.log('user created', user.email, user.uid);
//   // for background triggers you must return a value or promise
//   return admin
//     .firestore()
//     .collection('users')
//     .doc(user.uid)
//     .set({ email: user.email, upvotedOn: [] })
// })

// auth trigger (user deleted)
// exports.userDeleted = functions.auth.user().onDelete(user => {
//   console.log('user deleted', user.email, user.uid)
//   // for background triggers you must return a value or promise
//   const doc = admin
//     .firestore()
//     .collection('users')
//     .doc(user.uid)
//   return doc.delete()
// })