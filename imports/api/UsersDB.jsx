import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
export const Users = new Mongo.Collection('Users');
Meteor.methods({
  'users.tryAddUser'(newFacebookId, newUserName) {
        if(Users.findOne({facebookId:newFacebookId}) === undefined){
            Users.insert({
                facebookId: newFacebookId, 
                userName: newUserName,
                totalYears: 0,
                totalGames: 0,
                bestGameYears: 1000000
            });
        }
    }
});