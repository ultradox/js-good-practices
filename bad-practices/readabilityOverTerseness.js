// 1:
while (parent.nodeName.toLowerCase() !== 'div' && (p = parent.parentNode));

// 2:
do {
  if (parent.nodeName.toLowerCase() === 'div') {
    break;
  }
} while (parent = parent.parentNode);

// 3:
do
  if (parent.nodeName.toLowerCase() === 'div') break; while (parent = parent.parentNode);