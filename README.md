## Amplify Graphql Condition Expressions (for DynamoDB)

Condition expressions are available for all `write` ops via
graphql. DynamoDB uses the [following steps]:

```diff
1. Find existing item with same primary key
                    |
                    v
2. Evaluate Condition Expression against the
   matched item (if any)
                    |
                    v
3. If Condition Expression evaluates to true,
   perform the write
```

[following steps]: https://www.alexdebrie.com/posts/dynamodb-condition-expressions/
