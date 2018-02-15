var inputMonth = 02; /* TEMPORARY */
var inputDay = 26; /* TEMPORARY */
var result = 'Enter your name and birthday above to find out what mythical creature you are!';

var zodiacSign = [
	'Cadejo',
	'Griffin',
	'Hippocampus', 
	'Xiuhcoatl', 
	'Ent',
	'Amphiptere',
	'Selkie',
	'Fire Sprite', 
	'Tatzelwurm',
	'Hippogriff',
	'Panlong',
	'Pheonix'];


if ((inputMonth == 12 && inputDay > 21) || (inputMonth == 01 && inputDay <= 21)) {
	result = zodiacSign[0];
}

else if ((inputMonth == 01 && inputDay > 21) || (inputMonth == 02 && inputDay <= 19)){
	result = zodiacSign[1];
}

else if ((inputMonth == 02 && inputDay > 19) || (inputMonth == 03 && inputDay <= 20)){
	result = zodiacSign[2];
}

else if ((inputMonth == 03 && inputDay > 21) || (inputMonth == 04 && inputDay <= 20)){
	result = zodiacSign[3];
}

else if ((inputMonth == 04 && inputDay > 20) || (inputMonth == 05 && inputDay <= 21)){
	result = zodiacSign[4];
}

else if ((inputMonth == 05 && inputDay > 21) || (inputMonth == 06 && inputDay <= 21)){
	result = zodiacSign[5];
}

else if ((inputMonth == 06 && inputDay > 21) || (inputMonth == 07 && inputDay <= 22)){
	result = zodiacSign[6];
}

else if ((inputMonth == 07 && inputDay > 22) || (inputMonth == 08 && inputDay <= 22)){
	result = zodiacSign[7];
}

else if ((inputMonth == 08 && inputDay > 22) || (inputMonth == 09 && inputDay <= 23)){
	result = zodiacSign[8];
}

else if ((inputMonth == 09 && inputDay > 23) || (inputMonth == 10 && inputDay <= 23)){
	result = zodiacSign[9];
}

else if ((inputMonth == 10 && inputDay > 23) || (inputMonth == 11 && inputDay <= 22)){
	result = zodiacSign[10];
}

else if ((inputMonth == 11 && inputDay > 22) || (inputMonth == 12 && inputDay <= 21)){
	result = zodiacSign[11];
}

console.log(result);