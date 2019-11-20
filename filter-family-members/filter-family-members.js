// `filterFamilyMembers` accepts two arguments, a family tree object, and a truth test. `filterFamilyMembers` 
// returns an array, in any order, of the full names of family members who pass the passed in truth test.
// You will need to use recursion in your solution in order to handle nested family trees.
//
// A family member looks like this:
//
// {
//   firstName: 'Fred'
//   lastName: 'Zirdung'
//   location: 'San Francsico'
//   children: [/* ... */]
// }
//
// EXAMPLE:
//
// var familyTree = {
//   'firstName': 'Beth',
//   'lastName': 'Johnson',
//   'location': 'San Francisco',
//   'children': [
//     {
//       'firstName': 'Beth Jr.',
//       'lastName': 'Johnson',
//       'location': 'Berkeley',
//       'children': [
//         {
//           'firstName': 'Smitty',
//           'lastName': 'Won',
//           'location': 'Beijing',
//           'children': []
//         }
//       ]
//     },
//     {
//       'firstName': 'Joshie',
//       'lastName': 'Wyattson',
//       'location': 'Berkeley',
//       'children': []
//     }
//   ]
// };
//
// var livesInBerkeley = function (familyMember) {
//   return familyMember.location === 'Berkeley';
// }
//
// filterFamilyMembers(familyTree, livesInBerkeley)
//
// returns ['Beth Jr. Johnson', 'Joshie Wyattson'];


/////////////////////////////////////////////////////////
/*

	I really know what i should do but i don't know how to implement it.
	the idea is first i need to loop through the familyTree and check if the value is an array or the children is an array if yes i need to call the 
	same function (recursion) to loop again through the object and check the children again, when there are no children length === 0,
	look for the location of the current object and take the value if it's equal to (truthTest) to be pushed to an array, 
	but the problem here i have no clue how get back and loop again through another key?

*/




// var filterFamilyMembers = function (familyTree, truthTest) {
//   // All your code in this function body.
// 	var arr = [];

// 	for (var key in familyTree) {
// 		if (Array.isArray(familyTree['children'])) {
// 			for (var i = 0; i < familyTree['children'].length; i++) {
// 				return filterFamilyMembers(familyTree[i]);				
// 			}
// 		}
// 	if (familyTree[key] === truthTest) {
// 		return arr.push(familyTree[key])
// 	}
// 	}


// 	return arr;
// };
//   for (var key in familyTree) {
//   	if (Array.isArray(familyTree['children'])) {
//   		console.log(familyTree.location)
//   		return filterFamilyMembers(key)
//   	}
//   	if (familyTree[key] === truthTest) {
//   		arr.push(familyTree[key])
//   		console.log(familyTree[key])
//   	}
//   }

// return arr;


 //  var familyTree = {
	//   'firstName': 'Beth',
	//   'lastName': 'Johnson',
	//   'location': 'San Francisco',
	//   'children': [
	//     {
	//       'firstName': 'Beth Jr.',
	//       'lastName': 'Johnson',
	//       'location': 'Berkeley',
	//       'children': [
	//         {
	//           'firstName': 'Smitty',
	//           'lastName': 'Won',
	//           'location': 'Beijing',
	//           'children': []
	//         }
	//       ]
	//     },
	//     {
	//       'firstName': 'Joshie',
	//       'lastName': 'Wyattson',
	//       'location': 'Berkeley',
	//       'children': []
	//     }
	//   ]
	// };