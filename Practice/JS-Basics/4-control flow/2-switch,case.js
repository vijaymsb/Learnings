let role = 'guest';

switch (role) {
    case 'guest':
     console.log('Guest User');
     break;

    case 'moderator':
     console.log('Moderator User');
     break;

    default:
     console.log('Unknown User');

}

// Comparison between switchCase & ifElse


if (role === 'guest' && hour > 12) 
console.log('Guest User');
else if (role === 'moderator')
console.log('Guest User');
else 
console.log('Guest User');