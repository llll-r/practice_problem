const mergeTwoLian = (s, l) =>{
    if(s.length == 0) return l;
    if(l.length == 0) return s;
    let k = new listNode(null);
    cur = k;
    while(p.next || q.next){
        if(p.value < q.value){
            cur.next = p;
            p = p.next
        }else{
            cur.next = q;
            q = q.next
        }
        cur = cur.next
    }
    k.next = p ? p :q;
    return k.next
}
