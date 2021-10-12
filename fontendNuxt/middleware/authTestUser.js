// export default function({ store }) {
//   console.log("Hi");
//   console.log(this.$store.state.userInfo);
// }
export default function({ store, redirect }) {
  // // If the user is not authenticated
  // if (
  //   Object.keys(store.state.userInfo).length === 0 &&
  //   store.state.userInfo.constructor === Object
  // ) {
  //   return redirect("/logIn");
  //   // console.log("No");
  // }
  // // console.log(store.state.userInfo);

  if (!store.state.authUser) {
    return redirect("/logIn");
  }
}
