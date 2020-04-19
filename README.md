# javascript-task-3

function that takes one parameter (a whole number/integer) and checks if numbers from 1 to the given parameter (inclusive) are divisible by 2,3,5 while replacing with the appropriate words as specified below.

- Numbers divisible by 2 are replaced by "yu"

- Numbers divisible by 3 are replaced by "gi"

- Numbers divisible by 5 are replaced by "oh"

- Numbers are unchanged if not divsible by any of the above

If a number is divisible by more than one of the above, replace and join the words representing their divsiors, separating by hyphen (-).

### Example

<code>
divisible(45)
</code>

#### result:

<code>
[
  1,       'yu',       'gi',    'yu',
  'oh',    'yu-gi',    7,       'yu',
  'gi',    'yu-oh',    11,      'yu-gi',
  13,      'yu',       'gi-oh', 'yu',
  17,      'yu-gi',    19,      'yu-oh',
  'gi',    'yu',       23,      'yu-gi',
  'oh',    'yu',       'gi',    'yu',
  29,      'yu-gi-oh', 31,      'yu',
  'gi',    'yu',       'oh',    'yu-gi',
  37,      'yu',       'gi',    'yu-oh',
  41,      'yu-gi',    43,      'yu',
  'gi-oh'
]
</code>
