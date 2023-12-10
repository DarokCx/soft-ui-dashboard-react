// trainingSettings.js
// trainingSettings.js
const trainingSettings = [
    {
        title: "Files Settings",
        settings: [
            { name: "load from model", defaultValue: "", type: "text" },
            { name: "W&B project", defaultValue: "toy", type: "text" },
            { name: "Output Project", defaultValue: "out", type: "text" },
            { name: "Training file", defaultValue: "en-fr.tmx.py", type: "text" },
            { name: "data_type", defaultValue: "numpy", type: "text" },
        ],
    },
    {
        title: "Data Settings",
        settings: [
            { name: "Random seed", defaultValue: "-1", type: "number" },
            { name: "vocab_size", defaultValue: "50277", type: "number" },
        ],
    },
    {
        title: "Training Settings",
        settings: [
            { name: "ctx_len", defaultValue: "512", type: "number" },
            { name: "epoch_steps", defaultValue: "500", type: "number" },
            { name: "epoch_count", defaultValue: "500", type: "number" },
            { name: "epoch_begin", defaultValue: "0", type: "number" },
            { name: "epoch_save", defaultValue: "1", type: "number" },
        ],
    },
    {
        title: "Model Hyperparameters",
        settings: [
            { name: "micro_bsz", defaultValue: "12", type: "number" },
            { name: "n_layer", defaultValue: "6", type: "number" },
            { name: "n_embd", defaultValue: "512", type: "number" },
            { name: "dim_att", defaultValue: "0", type: "number" },
            { name: "dim_ffn", defaultValue: "1024", type: "number" },
            { name: "pre_ffn", defaultValue: "0", type: "number" },
            { name: "head_qk", defaultValue: "0", type: "number" },
            { name: "tiny_att_dim", defaultValue: "0", type: "number" },
            { name: "tiny_att_layer", defaultValue: "-999", type: "number" },
        ],
    },
    {
        title: "Optimizer Settings",
        settings: [          
            { name: "lr_init", defaultValue: "0.0008", type: "number" },
            { name: "lr_final", defaultValue: "0.00001", type: "number" },
            { name: "warmup_steps", defaultValue: "-1", type: "number" },
            { name: "beta1", defaultValue: "0.9", type: "number" },
            { name: "beta2", defaultValue: "0.99", type: "number" },
            { name: "adam_eps", defaultValue: "1e-8", type: "number" },
            { name: "grad_cp", defaultValue: "0", type: "number" },
            { name: "dropout", defaultValue: "0.01", type: "number" },
            { name: "weight_decay", defaultValue: "0.01", type: "number" },
            { name: "weight_decay_final", defaultValue: "-1", type: "number" },
        ],
    },
    {
        title: "Training Hyperparameters",
        settings: [
            { name: "my_pile_version", defaultValue: "1", type: "number" },
            { name: "my_pile_stage", defaultValue: "0", type: "number" },
            { name: "my_pile_shift", defaultValue: "-1", type: "number" },
            { name: "my_pile_edecay", defaultValue: "0", type: "number" },
            { name: "layerwise_lr", defaultValue: "1", type: "number" },
            { name: "ds_bucket_mb", defaultValue: "200", type: "number" },
        ],
    },

    {
        title: "Miscellaneous",
        settings: [
            { name: "my_img_version", defaultValue: "0", type: "text" },
            { name: "my_img_size", defaultValue: "0", type: "number" },
            { name: "my_img_bit", defaultValue: "0", type: "number" },
            { name: "my_img_clip", defaultValue: "x", type: "text" },
            { name: "my_img_clip_scale", defaultValue: "1", type: "number" },
            { name: "my_img_l1_scale", defaultValue: "0", type: "number" },
            { name: "my_img_encoder", defaultValue: "x", type: "text" },
            { name: "my_sample_len", defaultValue: "0", type: "number" },
            { name: "my_ffn_shift", defaultValue: "1", type: "number" },
            { name: "my_att_shift", defaultValue: "1", type: "number" },
            { name: "my_pos_emb", defaultValue: "0", type: "number" },
            { name: "load_partial", defaultValue: "0", type: "number" },
            { name: "magic_prime", defaultValue: "0", type: "number" },
            { name: "my_qa_mask", defaultValue: "0", type: "number" },
            { name: "my_random_steps", defaultValue: "0", type: "number" },
            { name: "my_testing", defaultValue: "", type: "text" },
            { name: "my_exit", defaultValue: "99999999", type: "number" },
            { name: "my_exit_tokens", defaultValue: "0", type: "number" },
        ],
    },
    {
        title: "Distributed Training",
        settings: [
            { name: "accelerator", defaultValue: "auto", type: "text" },
            { name: "devices", defaultValue: "1", type: "number" },
            { name: "precision", defaultValue: "bf16", type: "text" },
            { name: "strategy", defaultValue: "ddp", type: "text" },
            { name: "num_nodes", defaultValue: "1", type: "number" },
        ],
    },
];
    
export default trainingSettings;