const revengeOfBadger = {

  students: {
    chris: 4,
    scott: 5,
    lily: 0,
    anna: 1,
    donny: 3,
  }, //end of students array
  shortlist: [],
  generateShortList: function () {

    this.shortlist = []; //clears shortlist

    for ( const key in this.students) {
      const numClaps = this.students[key]; //gets the value of the number of claps and assigns it to numClaps

      if( numClaps > 2 ) {
        this.shortlist.push(key) // if numClaps is greater than 2, pushes the name to the shortlist
      }
    }

  }, // end of shortlist function
  drawWinner: function() {
    this.generateShortList();

    if( this.shortlist.length > 0) { // this if statement will grab a random student from the new generateShortList array
      const randomIndex = Math.floor(Math.random() * this.shortlist.length); // math.floor ensures the numbes are whole integers
      return this.shortlist[randomIndex]
    } else {
      return 'badger' // if there are no students in the array, return badger
    }

  }

} //end of revenge of Badger object //

console.log(revengeOfBadger.drawWinner()); // calls the draw winner function to draw a random student from the array
