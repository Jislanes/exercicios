export const translate = (rna) => {
 
    if (!rna) return [];

    const codons = rna.split(/(\w{3})/).filter(x => x);

    const protein = [];

    for (let codon = 0; codon < codons.length; codon++) {
      if (mapaCP[codons[codon]] === 'STOP') 
      break;

      protein.push(mapaCP[codons[codon]]);

      if (mapaCP[codons[codon]] === undefined) 
      
      throw new Error('Invalid codon');
  }

      return protein
}
    const mapaCP = {
        AUG: 'Methionine',
        UUU: 'Phenylalanine',
        UUC: 'Phenylalanine',
        UUA: 'Leucine',
        UUG: 'Leucine',
        UCU: 'Serine',
        UCC: 'Serine',
        UCA: 'Serine',
        UCG: 'Serine',
        UAU: 'Tyrosine',
        UAC: 'Tyrosine',
        UGU: 'Cysteine',
        UGC: 'Cysteine',
        UGG: 'Tryptophan',
        UAA: 'STOP',
        UAG: 'STOP',
        UGA: 'STOP'
      };


