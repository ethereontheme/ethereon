import { writeFileSync } from 'fs';
import l2j from 'less-to-json';

const json = l2j('src/base.less', 'utf8');

for (const key in json) {
    if (/^#[A-Fa-f0-9]$/.test(json[key])) continue;
    if (/^\d+$/.test(json[key])) json[key] = parseInt(json[key]);
    if (/^\d+,\s+\d+,\s+\d+$/.test(json[key])) json[key] = json[key].split(', ').map(n => parseInt(n));
}

writeFileSync('src/base.json', JSON.stringify(json, null, 4));