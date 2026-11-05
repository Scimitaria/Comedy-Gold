(DEFPARAMETER *lst* (LIST 0 1 2 3 4 5 6 7 8 9))

(DEFPARAMETER *funnies* (LIST
    '(CADADR '(CDDDDR (CDDDDR *lst*)))
    '(CADR (CDDDDR (CDDDDR *lst*)))
    ; One-line quine!
    ;'((LAMBDA (x) (LIST x (LIST 'quote x))) '(LAMBDA (x) (LIST x (LIST 'quote x))))
))

(LOOP FOR dumb IN *funnies* DO (FORMAT T "~35A => ~A~%" dumb (EVAL dumb)))