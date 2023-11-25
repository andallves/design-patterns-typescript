# Factory Method

## Intenção
*Definir uma interface para criar objeto, mas deixar as subclassses decidir que classe instanciar. O Factory Method
permite adiar a instanciação para as subclasses.*

## Sobre o Factory Method

- É um padrão de projeto de criação (lida com a criação de objetos)
- Oculta a lógica de instanciação do código cliente. O método fábrica será reponsável por instanciar as classes
  desejadas
- É obtido através de herança. O método fábrica pode ser criado ou sobrescrito por subclases

O que é bom ou ruim no Factory Method:

**Bom:**
- Ajuda a aplicar o Open/Closed Principle. Seu código vai estar aberto para extensão
- Ajuda na aplicação do Single Responsibility Principle. Separa o código que cria do código que usa o objeto
- Ajuda no desacoplamento do seu código

**Ruim:**
- Pode causar uma explosão de subclasses. É necessário uma classe Creator para cada ConcreteProduct. Só é
  vantajoso quando já seria necesserário estender a classe Creator na estrutura
