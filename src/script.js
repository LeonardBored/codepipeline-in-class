function alertMessage() {
    alert("Button clicked!");
}

// Export for testing (will be ignored in browser)
if (typeof module !== 'undefined') {
    module.exports = { alertMessage };
}
