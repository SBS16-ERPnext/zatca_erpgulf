// ZATCA utilities for field visibility management
window.zatca_utils = {
    load_zatca_flag: function(frm) {
        if (!frm.doc.company) {
            frm.doc.zatca_enabled = 0;
            frm.layout.refresh_dependency();
            return;
        }

        frappe.db.get_value(
            "Company",
            frm.doc.company,
            "custom_zatca_invoice_enabled"
        ).then(r => {
            if (!r || !r.message) {
                frm.doc.zatca_enabled = 0;
            } else {
                frm.doc.zatca_enabled = r.message.custom_zatca_invoice_enabled ? 1 : 0;
            }
            frm.layout.refresh_dependency();
        });
    },

    refresh_zatca_flag: function(frm) {
        if (!frm.doc.company) return;

        frappe.db.get_value(
            "Company",
            frm.doc.company,
            "custom_zatca_invoice_enabled"
        ).then(r => {
            if (!r || !r.message) return;

            const new_value = r.message.custom_zatca_invoice_enabled ? 1 : 0;
            if (frm.doc.zatca_enabled !== new_value) {
                frm.doc.zatca_enabled = new_value;
                frm.layout.refresh_dependency();
            }
        });
    },
};
