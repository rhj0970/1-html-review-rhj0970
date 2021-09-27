<?php

$num = 2;
$foo = $num ." be";
$bar = "or not " .$num. " be";

echo $foo . ' ' . $bar . "\n";

echo $num * $num * $num;

$arr = [
    "first" => "Jason",
    "second" => "Tom",
    "best" => "DS"
];

$arr2 = [1,1,2,3,5,8];




function printList($someArr) {
    echo "<ul>\n";
    foreach($someArr as $key => $val) {
        echo "<li>".$key. " is " .$val. "<li>\n";
    }
    echo "<ul>\n";
}

printList($arr);
printList($arr2);


if (true) {
    echo "\nTRUE\n";
}
else{
    echo "FALSE \n";
}

while (true) {
    //This way it doesn't actually do anything
    break;
}

# This is also a comment



function printAndEncode( $val ) {
    echo json_encode(
        $val, 
        JSON_PRETTY_PRINT|JSON_THROW_ON_ERROR
    );
}
printAndEncode($arr);

// ====
// Naming conventions

// JS & PHP : camelCase

// PascalCase
// snake_case
// kebab-case