This example shows that each run gives different results for files from src().

To test:

```console
npm ci
for {1..10}; do node index.js; done;

Unsorted hash is: 021213e1fa621bc4addeb589284394e9
Sorted hash is: abad07ce762de2827d06d5e182e95171

# ... note the first hash changes while the second is stable.
```
