var Enemy = function(name, color, position, direction, height) {

  this.name = name;
  this.position = position;
  this.speed = 0.4;
  this.direction = direction;
  this.height = height;

  this.material = new THREE.MeshLambertMaterial({
    color: color,
  });

  var singleGeometry = new THREE.Geometry();

  vehiculeMesh = new THREE.ConeGeometry(5, 20, 32);
  this.graphic = new THREE.Mesh(vehiculeMesh, this.material);
  this.graphic.position.z = 6;

}

Enemy.prototype.enemymove = function () {

  max = this.height / 2;
  min = -(this.height / 2);

  if (this.position.y > max || this.position.y < min)
    this.speed = -this.speed;

   var moveTo = new THREE.Vector3(
        this.position.x,
        this.speed * Math.cos(this.direction) + this.position.y,
        this.graphic.position.z
    );

    this.graphic.position.x = this.position.x;
    this.graphic.position.y = this.position.y;

    this.position = moveTo;
}
