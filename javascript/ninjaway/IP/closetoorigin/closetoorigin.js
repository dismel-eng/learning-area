/**
 * Input: Two points (X1, Y1) y (X2, Y2) 
 * Output: Print the coordinates of the closest one to the origin.
 *         If both have the same distance, then print both.
 */

/** Represent a point (X, Y) */

function Point(x, y){
    this.x = x;
    this.y = y;
    this.printPoint = function(){
        console.log(`${x}`+', '+`${y}`);        
    }    
}

function DistanceFromOrigin(point){
   
   let distance;

   if (point instanceof Point) {
        distance = parseInt(Math.sqrt(Math.pow(point.x,2) + Math.pow(point.y,2)));
   } else {
       throw new Error('You need to provide a Point object.');
   }
   
   return distance;
}

function CloseToOrigin(point1, point2) {
        
    let distance_point1 = DistanceFromOrigin(point1);
    let distance_point2 = DistanceFromOrigin(point2);

    if(distance_point1 === distance_point2){

        point1.printPoint();
        point2.printPoint();
        return;
    }

    if (distance_point1 < distance_point2) {

        point1.printPoint();

    } else {

        point2.printPoint();

    }
        
}

let point1 = new Point(4,5);
let point2 = new Point(3,9);

CloseToOrigin(point1, point2);