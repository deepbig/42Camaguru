const { assert } = require('chai');
const expect = require('chai').expect;
// const should = require('chai').should();

//basic mocha and chai test
describe('Basic Mocha String Test', () => {
    it('should return number of characters in a string', () => {
        //assert.equal("Hello".length, 4);
        expect("Hello".length).to.equal(5);
    });
    it('should return first character of the string', () => {
        //setup
        const str = "Hello";
        const expected = 'H';

        //exercise
        const result = str.charAt(0);

        //verify
        assert.equal(result, expected);
        // result.should.equal(expected);
    });
});

//web allowing you to make basic photo and video editing using webcam and image.

//1) images should have alpha channel

//2) users should be able to selct an image in a list of superposable images
// ex.. a picture frame, or other "we don't want to know what you are using this for" objects
// Therefore, take a picture with his/her webcam and admire the result that should be mixing both picture.

//3) all caputed images should be public, likeables, and commentable.

//////////////////
//4) No error, no warning, or log line in any console. (server and client sides)

//5) server side = Express.js

//6) client side = React.js

//7) communicate with your database that must be quaryable with SQL.
//8) error mode of this driver PDO::ERRMODE_EXCEPTION

//9) security leak!! Use CORS and data privacy

//10) you are free to use any webserver you want, like Apache, Nginx

////////////////
//11) MVC structure

//12) page layout (header, a main section, and footer),
//13) able to display correctly on mobile (have an adapted layout on small resolutions);

//14) all your forms should have correct validations

//16) User Features:
describe('User Features', () => {
    //1: allow a user to sign up by asking at leat a valid email address, username, with at least minimum level of complexity.
    describe('landing page should be a login page', () => {
        it('should return login form', () => {

        });
    });
    describe('should have four menu at the header', () => {
        it('home button exist - contains create image at the top and history', () => {
            
        });
        it('Explore button exits - contains all public images', () => {

        });
        it('notification button exist - contains liked and commented', () => {

        });
        it('Profile button exist - user info and logout', () => {

        });
    })
    describe('Auth Features', () => {
        describe('Sign Up', () => {
            describe('sign up with email address, username, and password', () => {
                it('should return valid username', () => {
                    //setup
        
                    //exercise
        
                    //verify
                });
                it('should return ERROR for invalid username', () => {
                    //setup
        
                    //exercise
        
                    //verify
                });
                it('should return valid email address', () => {
                    //setup
        
                    //exercise
        
                    //verify
                });
                it('should return ERROR for invalid email address', () => {
                    //setup
        
                    //exercise
        
                    //verify
                });
                it('should return valid password (minimum level of complexity)', () => {
                    //setup
        
                    //exercise
        
                    //verify
                });
                it('should return ERROR for invalid password (minimum level of complexity)', () => {
                    //setup
        
                    //exercise
        
                    //verify
                });
        
            });
            //2: at the end of registration process, an user should confirm his accout via a unique link sent at the email address fullfiled in the registration form.
            describe('at the end of registration process, send unique link to user email to confirm', () => {
                it('should not fulfill the form before confirmation', () => {
                    //setup
        
                    //exercise
        
                    //verify
                });
                it('should fulfill after the confirmation', () => {
                    //setup
        
                    //exercise
        
                    //verify
                });
            });
        });
        //3: Then the user able to connect to your app, using his username and password. + password reinitialisation mail if he forget his password.
        describe('log In', () => {
            describe('login with username and password', () => {
                it('should not let them in with invalid username', () => {
                    //setup
        
                    //exercise
        
                    //verify
                });
                it('should not let them in with invalid password', () => {
                    //setup
        
                    //exercise
        
                    //verify
                });
                it('should allow them to login with vaild username & password', () => {
                    //setup
        
                    //exercise
        
                    //verify
                });
            });
            describe('user should be able to control private data', () => {
                it('should be able tochange password through email', () => {
                    //setup
        
                    //exercise
        
                    //verify
                });
                //5: once connected, user should modify username, mail address, or password.
                it('should be able to modify username, mail address, or password', () => {
                    //setup
        
                    //exercise
        
                    //verify
                });
            });
        });
        //4: user should able to disconnect in one click at anytime on any page.
        describe('log Out', () => {
            describe('should provide disconnect finction at anytime on any page', () => {
                it('should redirect to login page', () => {

                });
                it('should provide disconnect finction at anytime on any page', () => {

                });
            });
        });
//15) the whole site should be secured. 
    //1: Store plain or unencrypted passwords in the database.
    //2: Offer the ability to inject HTML or "user" JavaScript in badly protected variables.
    //3: Offer the ability to upload unwanted content on the server.
    //4: offer the possiblity of altering an SQL query.
    //5: Use an exern form to manipulate so-called private data.
        describe('Security Features', () => {
            it('Should not store plain or unencrypted passwords in the database.', () => {

            });
            it('Should not offer the ability to inject HTML or "user" JavaScript in badly protected variables', () => {

            });
            it('Should not offer the ability to upload unwanted content on the server.', () => {

            });
            it('Should not offer the possiblity of altering an SQL query.', () => {

            });
            it('Should not use an exern form to manipulate so-called private data.', () => {

            });
        });
    });
    describe('Content Features', () => {
        describe('User Control', () => {
            describe('user should able to control own public data', () => {
                it('should return their own images in home page', () => {
                    //setup
        
                    //exercise
        
                    //verify
                });
                it('should provide delete function for the images', () => {
                    //setup
        
                    //exercise
        
                    //verify
                });
                it('should provide create function in home page', () => {
                    //setup
        
                    //exercise
        
                    //verify
                });
            });
        });
    });  

});


//17) Gallery Features:
    //1: This part is to be public and must display all the images edited by all the users. ordered by date of creation.
    //2: it should allow (only) a connected uesr to like them and/or comment them.
    //3: when an image receives a new comment, the author of the image should be notified by email. This preference must be set as true by default but can be decatived in user's preferences.
    //4: The list of images must be paginated, with at least 5 elements per page. (let's use Load more type)

//18) Editing features:
    //1: Accessible only to users that are authentified/connected, gently reject all other users.
    //2: main section containing the preview of the user's webcam, the list of superposable images, and button allowing to capture a picture.
    //2-1: superposable images must be selectable and the button allowing to take the picture should be inactive (not clickable) as long as no superposable image bas been selected.
    //2-2: the creation of the final iamge (so among others the superposing of the two images) must be done on the server side.
    //2-3: because not everyone has a webcam, you should allow the upload of a user image instead of capturing one with the webcam.
    //2-4: user should be able to delete his edited images, but only his, not other users' creations.
    //3: side section displaying thumbnails of all previous pictures taken.

//19) config/setup.js file, capable of creating or re-creating the database schema, by using the info contained in the file config/database.js

//20) the config/database.js file, containing your database configuration, that will be instanced via ( ) such as 'mysql:dbname=testdb;host=127.0.0.1';
