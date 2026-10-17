const commonFooter = document.getElementById("common-footer");

if (commonFooter) {
    const year = new Date().getFullYear();
    commonFooter.innerHTML = `
        <footer class="site-footer">
            <small class="copyright">&copy; ${year} ICE PICK. All Rights Reserved.</small>
        </footer>
    `;
}
