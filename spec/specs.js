describe('findAndReplace', function() {
  it('prompts user if entered an empty string', function() {
    expect(findAndReplace("")).to.eq("Please enter a sentence.");
  });

  it("replaces old word with new word", function() {
    expect(findAndReplace("hello okay", "okay", "cool")).to.eql("hello cool");
  });
});
