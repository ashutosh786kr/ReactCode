/*process of making store
1. bring configureStore form  rtk
2. store is ready to nbunt its still  not configurable 
so lets export an variable using the function only (configure store) and configrue store takes object only inside of it 
3.we gottta create reducers and in redux tool kit the way to make reducers is a bit different 
we call it "slices"
for making slice there is a method we gonna use and that is createSlice that comes from reduxjs/Toolkit and to create specific id here we have nanoID hook that come form rtk
4.Store' most important thing its initial state , by means that what does it have at its initial state like is it gonna be empty, array or objecet but 
its preferable to have it as Object 
while creating slice when exporting and there in the fucntion of creatSlice we pass the object 
and hence that object has this property of 
"name :"
and second thing that we pass into these slices  is 
"initialState: " that we have defined earlier
now to finish the incompleteness of  the store  we add 'reduceres' to it and reducers is nothing but property 

reducers store property and functions in the form of object 
okay so major difference that lies wtihin this context API and this redux is that we just used to declare fucntion in the context part and 
write the functionality elseWhere and 
here in redux we define the functionality with functionality  here in the slice.j itself and this ahs a particular syntax to it it has two things 
"state" and "action"
"state" = state provides the access to the hand to hand conditon and state whereas
"action" = valuues to use the fucntion like id to delete the todo we get from actions 

so here in action there is a property called action and that payload is an object an its property is text
now lets dive into further processing

5.todo slice is exported in two parts 
1st part we export fucntionality addTdodo and deleteTodo as actions so that fucntions can receive values form actions and it will be used in components 
and now this store needs awareness about alll the reducers coz its a restrictive store  , it only updates from the value taken from only the registered reducers and store needs the knwoledge about the reducers
*/

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
