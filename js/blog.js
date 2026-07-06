
    // Toggle post open/close
    document.querySelectorAll('.post-card').forEach(card => {
      card.addEventListener('click', function(e) {
        if (e.target.classList.contains('collapse-btn')) return;
        const body = this.querySelector('.post-body');
        const isOpen = body.classList.contains('open');
        // close all
        document.querySelectorAll('.post-body').forEach(b => b.classList.remove('open'));
        if (!isOpen) body.classList.add('open');
      });
    });

    function togglePost(btn) {
      btn.closest('.post-body').classList.remove('open');
    }

    // Filter
    function filterPosts(category, btn) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.querySelectorAll('.post-card').forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    }
