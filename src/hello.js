/**
 * Created by Administrator on 2016/11/14.
 */




function sayHello( to ) {
     var $div = $( '<div/>' );
     return _.template("Hello, <%= name %>!")({ name: to });
}
