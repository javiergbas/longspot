load('application');

action('new', function () {
  render({
    title: "Crea un nuevo spot"
  });
});

action('index', function () {
  render({
    title: "Todos los spots a un click"
  });
});

action('show', function () {
  this.title = "Waimea | RailsSpot"
  this.spot_id = "Spot "+req.params.id;
  this.spot_name = "Waimea"
  render();
});

action('edit', function () {
  render({
    title: "Edita el spot "
  });
});
