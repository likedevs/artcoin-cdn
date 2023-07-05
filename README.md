# Artcoin content delivery network

Configuration:

Add 
```<script type="module" src="https://cdn.jsdelivr.net/gh/likedevs/artcoin-cdn/src/artcoin.js"></script> ``` 
in your main html file, before closing the body tag.

To display the button, it is needed to add in your html this tag :

```
<div class="artcoin-btn" 
    price="20"               
    owner="01f0d0b7dfd44d16c5d398d0d702467afa28a9a82ee31b12d69ed187654e29152b">
    Buy now
</div>
```

where the it should appear.

`price` and `owner` can be changed.