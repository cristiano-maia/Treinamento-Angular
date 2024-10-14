
### Event Binding em Angular

**Event Binding** em Angular é a técnica usada para reagir às ações dos usuários em uma página web, como cliques, digitação, movimentos do mouse, entre outras. Ele permite que você vincule eventos de HTML a métodos no seu componente Angular, criando uma interação dinâmica entre a interface e o código.

A sintaxe básica do event binding é:
```html
<elemento (evento)="metodo()"></elemento>
```
Aqui, `(evento)` é o evento HTML que você quer monitorar (como `click`), e `metodo()` é o método no componente Angular que será executado quando o evento ocorrer.

#### Exemplos de Event Binding

1. **Clique em um botão:**
   ```html
   <button (click)="onClick()">Clique aqui</button>
   ```
   Quando o botão for clicado, o método `onClick()` será executado no componente TypeScript.

2. **Evento de teclado:**
   ```html
   <input (keyup)="onKeyPress($event)">
   ```
   Quando uma tecla for pressionada e solta no campo de texto, o método `onKeyPress()` será chamado.

#### Tipos de Eventos e Ações

| Tipo de Evento        | Descrição                          | Exemplo de Ação               |
|-----------------------|------------------------------------|-------------------------------|
| `click`               | Disparado quando o elemento é clicado | `onClick()` executa ao clicar  |
| `dblclick`            | Disparado ao clicar duas vezes       | `onDoubleClick()` no duplo clique |
| `mouseover`           | Quando o mouse passa sobre o elemento | `onMouseOver()` quando passa sobre |
| `mouseout`            | Quando o mouse sai do elemento      | `onMouseOut()` ao sair do elemento |
| `keyup`               | Quando uma tecla é liberada        | `onKeyUp()` quando solta a tecla |
| `keydown`             | Quando uma tecla é pressionada     | `onKeyDown()` ao pressionar a tecla |
| `input`               | Quando o valor do campo muda enquanto o usuário digita | `onInputChange()` durante a digitação |
| `change`              | Quando o valor de um campo muda    | `onChange()` ao mudar o valor |
| `focus`               | Quando um campo recebe o foco      | `onFocus()` ao focar no campo |
| `blur`                | Quando um campo perde o foco       | `onBlur()` ao desfocar do campo |
| `drag`                | Quando um elemento é arrastado     | `onDrag()` durante o arrasto |
| `drop`                | Quando um elemento é solto em uma área | `onDrop()` ao soltar o elemento |
| `resize`              | Quando a janela é redimensionada   | `onResize()` durante o redimensionamento |
| `scroll`              | Quando a página ou elemento rola   | `onScroll()` durante a rolagem |

Esses são apenas alguns dos eventos mais comuns. Você pode vincular qualquer evento nativo HTML ao seu componente Angular utilizando **Event Binding**.

#### Exemplo de Event Binding


<img src=image.png alt="" width=600>