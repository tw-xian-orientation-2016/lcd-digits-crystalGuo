describe("when get number then output LCDString", function() {
  it('should print correct LCDString', function() {

    spyOn(console, 'log');

    var input = 910;
    printResult(input);

    var result = "._. ... ._.\n|_| ..| |.|\n..| ..| |_|\n"

    expect(console.log).toHaveBeenCalledWith(result);
  });

});
