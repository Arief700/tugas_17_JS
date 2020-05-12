const sizeFonts = () => {
  var sentence1 = "Saya beLajar bahaSa peMrograman deNgan khUsuk."
  console.log(sentence1.toLowerCase());
  console.log(sentence1.toUpperCase());

  var sentence2 = "Allen SedAng MemAncinG IkaN di SuNgai, DIA MEndapat IkAN GaBuS 3 Ekor dan LanGsuNg Dijual. "
  console.log(sentence2.toLowerCase());
  console.log(sentence2.toUpperCase());
}
sizeFonts()

console.log("==============================================================================================");

const ASCII = () => {
  var paragraph = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  var substrings = paragraph.substr(0, 6)

  var a = substrings.charCodeAt(0)
  var b = substrings.charCodeAt(1)
  var c = substrings.charCodeAt(2)
  var d = substrings.charCodeAt(3)
  var e = substrings.charCodeAt(4)
  var f = substrings.charCodeAt(5)

  console.log(a + "-" + b + "-" + c + "-" + d + "-" + e + "-" + f);
}

ASCII()
