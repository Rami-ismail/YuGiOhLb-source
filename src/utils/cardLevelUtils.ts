export const levelRankConverter = (levelRank: number) => {
    let temp = '[';
    for (let i = 0; i < levelRank; i++) {
      temp += '★';
    }
    temp += ']'
    return temp;
  }

  //link markers should become it's own type
  export const linkConverter = (linkmarkers: string[]) => {
    let temp = '';
    linkmarkers.forEach((direction) => {
      switch (direction) {
        case 'Left':
          temp += '←';
          break;
        case 'Bottom-Left':
          temp += '↙';
          break;
        case 'Bottom':
          temp += '↓';
          break;
        case 'Bottom-Right':
          temp += '↘';
          break;
        case 'Right':
          temp += '→';
          break;
        case 'Top-Right':
          temp += '↗';
          break;
        case 'Top':
          temp += '↑';
          break;
        case 'Top-Left':
          temp += '↖';
          break;
        default:
          break;
      }
    });
    return temp;
  }