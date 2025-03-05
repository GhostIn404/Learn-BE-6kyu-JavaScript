function dnaStrand(dna){
    let complements = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'}
    return dna.split('').map(nucleotide => complements[nucleotide]).join('');
  }