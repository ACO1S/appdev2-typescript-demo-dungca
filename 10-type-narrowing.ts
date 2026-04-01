// Simulate input element in Node.js
const inputEl = { value: 'LVCC' } as { value: string } | null;

// Safe check
if (inputEl) {
    console.log('✅ Input value is:', inputEl.value);
} else {
    console.log('⚠️ Input element not found.');
}

// Optional access version
console.log('Optional access:', inputEl ? inputEl.value : 'No value found');