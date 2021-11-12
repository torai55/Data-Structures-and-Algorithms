class Trie {
  #root

  constructor() {
    this.#root = Object.create(null)
  }

  insert(word) {
    let curr = this.#root
    let char

    for (let i = 0; i < word.length; i++) {
      char = word[i]
      if (!curr[char]) curr[char] = Object.create(null)
      curr = curr[char]
    }
    return this
  }

  getRoot() {
    return this.#root
  }
}

const trie = new Trie()
const root = trie.insert('apple').insert('apex').getRoot()
console.log(root)
