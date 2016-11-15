/**
 * Created by Administrator on 2016/11/15.
 */

describe( "Hello", function (  ) {

    

    it("says hello to receiver", function() {
        expect(sayHello('Jane')).toBe("Hello, Jane!");
    });
} );

