describe("Pasta", function() {
  it("fazer spaghetti bolonhesa", function() {
    var pasta = new Pasta();
    pasta.add("tomate");
    pasta.add("alho");
    pasta.add("oliva");
    pasta.add("ervas");
    pasta.add("carne");
    expect(pasta.getType()).toEqual("bolonhesa");
    expect(pasta.isTasty()).toEqual(true);
  });

  it("faz macarrao sem molho", function() {
    var pasta = new Pasta();
    pasta.add("carne");
    expect(pasta.getType()).toEqual(undefined);
    //macarrao só com carne nao é nem macarrao
    expect(pasta.isTasty()).toEqual(false);
  });

  it("faz macarrao sem alho", function() {
    var pasta = new Pasta();
    pasta.add("tomate");
    pasta.add("oliva");
    pasta.add("ervas");
    pasta.add("carne");
    expect(pasta.getType()).toEqual("bolonhesa");
    //macarrao sem alho nao é bom
    expect(pasta.isTasty()).toEqual(false);
  });

});