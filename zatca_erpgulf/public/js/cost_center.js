frappe.ui.form.on('Cost Center', {
    refresh(frm) {
        zatca_utils.refresh_zatca_flag(frm);
    },
    company(frm) {
        zatca_utils.load_zatca_flag(frm);
    }
});
