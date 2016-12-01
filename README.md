# Campo Minado

O jogo consiste em um tabuleiro com vários blocos em branco. Quando clicados, estes blocos tem seu conteúdo descoberto. Minas são distribuídas aleatóreamente nestes blocos. O jogo termina quando o jogador clica em cima de uma mina, perdendo o jogo ou, quando descobre a localização de todas as minas existentes no tabuleiro tornando-se vencedor.  

## Regras do do jogo  

- O jogador deve marcar a exata localização de cada mina existente no tabuleiro.  

- O jogo termina com vitória apenas quando todas as minas são descobertas corretamente pelo jogador.

- O número máximo de marcações permitidas é o mesmo número do total de minas existentes ao tabuleiro.

## Complementos

- Quando o jogador clica em cima de um bloco vizinho a uma mina um número será mostrado. Este número significa a quantidade de minas presentes na vizinhança deste bloco. Leve em consideração a palavra vizinhança como sendo o limite de um bloco lateral de ambos os lados, acima e abaixo desconsiderando o limite do tabuleiro.

- Quando não existe nenhuma mina vizinha a um bloco clicado, este exibe seu conteúdo com uma cor diferenciada dos demais blocos que não foram clicados e, vão automaticamente e recursivamente abrindo os demais blocos em sua vizinhança até o limite do tabuleiro ou quando encontrar um bloco demarcando um mina em sua vizinhança, bloco este que também será exibido.
