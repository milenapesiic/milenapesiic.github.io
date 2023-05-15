
// this can live on this page or on a dedicate js for this page
  person_data = {
"origin": ["#sentence#"],
"misunderstanding" : ["#emotion##emotion# #human_idea#"],
"sentence": ["I really #emotion# #human_idea#, but I can't believe aliens don't #emotion# #alien_idea#"],
"emotion": ["love", "hate", "despise", "envy", "relate to", "feel for those affected by", "like", "care about", "don't like", "adore", "forget about"],
"human_idea": ["puppies", "climate change", "veganism", "Britney Spears", "burgers", "Denny's", "bed bugs", "shrimp", "mayo", "world peace", "deforestation", "thrifting", "Starbucks", "Target", "Netflix", "tissues", "socks", "Tik Tok", "health care", "highschool"],
"alien_idea": ["Instagram", "Snapchat", "money", "iphones", "Instagram reels", "matcha", "coffee", "shopping", "TV", "tofu", "global warming"]
}

function generate_persons(){
  result = "<ol>"

  console.log(person_data)
  for (let i = 0; i < 23; i++){
    result += "<li>" + grammars.GenerationSource(person_data, "#sentence#") + "</li>";
  }
  result += "</ol>";
  console.log(result)
  io.write_into_element(result, "persons")
}

function generate_misunderstanding(){
  result = "<ol>"

  console.log(person_data)
  for (let i = 0; i < 23; i++){
    result += "<li>" + grammars.GenerationSource(person_data, "#misunderstanding#") + "</li>";
  }
  result += "</ol>";
  console.log(result)
  io.write_into_element(result, "misunderstanding")
}